from rapidocr_onnxruntime import RapidOCR
import glob

ocr = RapidOCR()
for fn in sorted(glob.glob('*.jpeg')):
    print(f'\n=== {fn} ===')
    result, _ = ocr(fn)
    if not result:
        print('NO TEXT')
        continue
    for item in result:
        print(item[1], ' conf=', item[2])
