Add-Type -ReferencedAssemblies System.Drawing -TypeDefinition @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public class LoneWarriorExtractor {
    public static void Extract(string srcPath, string destPath) {
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

                // 1. Wipe the watermark star in the bottom right corner
                int starX = (int)(w * 0.80f);
                int starY = (int)(h * 0.80f);
                for (int y = starY; y < h; y++) {
                    for (int x = starX; x < w; x++) {
                        bytes[(y * w + x) * 4 + 3] = 0;
                    }
                }

                // 2. Clear pure outer black space without eating inside body
                // Pixels outside the cape and character (x < 60, x > 850, y < 40, y > 970) are fully transparent
                for (int y = 0; y < h; y++) {
                    for (int x = 0; x < w; x++) {
                        int idx = (y * w + x) * 4;
                        byte b = bytes[idx];
                        byte gVal = bytes[idx + 1];
                        byte r = bytes[idx + 2];
                        int maxVal = Math.Max(r, Math.Max(gVal, b));

                        // Outer border bounds where no character exists
                        if (x < 60 || x > 840 || y < 40 || y > 980) {
                            if (maxVal < 20) {
                                bytes[idx + 3] = 0;
                            }
                        }

                        // Floor shadow under boots: smooth fade from y=920 to 980
                        if (y > 920 && maxVal < 30) {
                            float fade = 1.0f - ((y - 920f) / 60f);
                            if (fade < 0f) fade = 0f;
                            bytes[idx + 3] = (byte)(bytes[idx + 3] * fade);
                        }
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

[LoneWarriorExtractor]::Extract($src, $dest)
Write-Host "Lone warrior created with full figure preserved and watermark erased!"
