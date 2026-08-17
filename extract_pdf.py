import sys
import os

try:
    import fitz  # PyMuPDF
    from PIL import Image
except ImportError:
    print("PyMuPDF or PIL not installed. Run: pip install PyMuPDF pillow")
    sys.exit(1)

pdf_path = r"c:\Projects\Sivas\source-material\projects\Selestia (1).pdf"
out_dir = r"c:\Projects\Sivas\public\projects\selestia"

if not os.path.exists(out_dir):
    os.makedirs(out_dir)

try:
    doc = fitz.open(pdf_path)
    page_count = len(doc)
    print(f"Total pages: {page_count}")

    for i in range(page_count):
        page = doc.load_page(i)
        # 2x zoom for better resolution
        mat = fitz.Matrix(2, 2)
        pix = page.get_pixmap(matrix=mat, alpha=False)
        
        img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
        
        filename = f"{i + 1:02d}.webp"
        out_path = os.path.join(out_dir, filename)
        img.save(out_path, "WEBP", quality=85)
        print(f"Saved {out_path}")

except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
