from PIL import Image, ImageOps, ImageFilter
from rapidocr_onnxruntime import RapidOCR

ocr = RapidOCR()
fn = 'WhatsApp Image 2026-11-06 at 10.09.26.jpeg'
img = Image.open(fn)
# Convert to grayscale, upscale and threshold
img = ImageOps.grayscale(img)
img = img.resize((img.width * 2, img.height * 2))
img = img.point(lambda p: 255 if p > 180 else 0)
img.save('proc.jpg')
result, _ = ocr('proc.jpg')
print('RESULTS:')
if not result:
    print('NO TEXT')
else:
    for item in result:
        print(item[1], ' conf=', item[2])
