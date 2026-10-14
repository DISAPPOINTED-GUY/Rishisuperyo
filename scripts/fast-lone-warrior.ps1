Add-Type -ReferencedAssemblies System.Drawing -TypeDefinition @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;
using System.Collections.Generic;

public class ImageProcessor {
    public static void ProcessLoneWarrior(string srcPath, string destPath) {
        using (Bitmap orig = new Bitmap(srcPath)) {
            int w = orig.Width;
            int h = orig.Height;
            using (Bitmap bmp = new Bitmap(w, h, PixelFormat.Format32bppArgb)) {
                using (Graphics g = Graphics.FromImage(bmp)) {
                    g.DrawImage(orig, 0, 0, w, h);
                }

                BitmapData data = bmp.LockBits(new Rectangle(0, 0, w, h), ImageLockMode.ReadWrite, PixelFormat.Format32bppArgb);
                byte[] bytes = new byte[w * h * 4];
                Marshal.Copy(data.Scan0, bytes, 0, bytes.Length);

                bool[] visited = new bool[w * h];
                Queue<int> q = new Queue<int>();

                // Seed top and bottom borders
                for (int x = 0; x < w; x++) {
                    q.Enqueue(x); // y = 0
                    visited[x] = true;
                    int btm = (h - 1) * w + x;
                    q.Enqueue(btm);
                    visited[btm] = true;
                }
                // Seed left and right borders
                for (int y = 0; y < h; y++) {
                    int left = y * w;
                    int right = y * w + (w - 1);
                    if (!visited[left]) { q.Enqueue(left); visited[left] = true; }
                    if (!visited[right]) { q.Enqueue(right); visited[right] = true; }
                }

                int[] dx = { 1, -1, 0, 0 };
                int[] dy = { 0, 0, 1, -1 };

                while (q.Count > 0) {
                    int curr = q.Dequeue();
                    int px = curr % w;
                    int py = curr / w;
                    int idx = curr * 4;

                    byte b = bytes[idx];
                    byte gVal = bytes[idx + 1];
                    byte r = bytes[idx + 2];
                    int maxVal = Math.Max(r, Math.Max(gVal, b));

                    // Outer dark space
                    if (maxVal < 26) {
                        bytes[idx + 3] = 0; // Transparent

                        for (int i = 0; i < 4; i++) {
                            int nx = px + dx[i];
                            int ny = py + dy[i];
                            if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
                                int nPos = ny * w + nx;
                                if (!visited[nPos]) {
                                    visited[nPos] = true;
                                    q.Enqueue(nPos);
                                }
                            }
                        }
                    } else if (maxVal < 50) {
                        // Soft glow edge falloff
                        float ratio = (maxVal - 26f) / 24f;
                        bytes[idx + 3] = (byte)(Math.Max(0f, Math.Min(255f, ratio * 255f)));
                    }
                }

                // Also wipe the watermark star in bottom right
                int starStartX = (int)(w * 0.82f);
                int starStartY = (int)(h * 0.82f);
                for (int y = starStartY; y < h; y++) {
                    for (int x = starStartX; x < w; x++) {
                        bytes[(y * w + x) * 4 + 3] = 0;
                    }
                }

                Marshal.Copy(bytes, 0, data.Scan0, bytes.Length);
                bmp.UnlockBits(data);

                if (System.IO.File.Exists(destPath)) {
                    System.IO.File.Delete(destPath);
                }
                bmp.Save(destPath, ImageFormat.Png);
            }
        }
    }
}
"@

$src = "C:\Users\user\.gemini\antigravity-ide\brain\5bd3fabe-9a3e-4988-b3c0-bedde965fbab\.user_uploaded\media_1791630462903.jpg"
$dest = "c:\Users\user\Documents\Dev\Rishisuperyo\public\characters\lone-warrior.png"

[ImageProcessor]::ProcessLoneWarrior($src, $dest)
Write-Host "Processed lone-warrior.png in high speed with perfect silhouette and alpha!"
