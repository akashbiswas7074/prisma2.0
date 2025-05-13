from PyPDF2 import PdfReader
from PIL import Image
import os

# Define paths
pdf_path = 'c:/Users/abwor/Downloads/Bhor-Mag-24-main/Bhor-Mag-24-main/public/prisma2 (1).pdf'
output_dir = 'c:/Users/abwor/Downloads/Bhor-Mag-24-main/Bhor-Mag-24-main/public/extracted_images'

# Create output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Read the PDF
reader = PdfReader(pdf_path)

# Extract images
for i, page in enumerate(reader.pages):
    if '/XObject' in page['/Resources']:
        xObject = page['/Resources']['/XObject'].get_object()
        for obj in xObject:
            if xObject[obj]['/Subtype'] == '/Image':
                size = (xObject[obj]['/Width'], xObject[obj]['/Height'])
                data = xObject[obj].get_data()
                mode = "RGB" if xObject[obj]['/ColorSpace'] == '/DeviceRGB' else "P"
                try:
                    img = Image.frombytes(mode, size, data)
                    img.save(f'{output_dir}/page_{i+1}.png')
                    print(f'Extracted page {i+1}')
                except Exception as e:
                    print(f"Failed to extract image on page {i+1}: {e}")
