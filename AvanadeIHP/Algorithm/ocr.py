import pytesseract
import os
import filetype
import fitz

class OCR:
    def __init__(self):
        self.custom_config = r'--oem 3 --psm 6'

    def readimage(self,address):
        kind = filetype.guess(address)
        if(kind.extension == 'pdf'):
            imageAddress = "image"
            self.pdf_image(address,imageAddress,5,5,0)
            s = pytesseract.image_to_string(imageAddress+".png", config=self.custom_config)
            os.remove(imageAddress+".png")
        else:
            s = pytesseract.image_to_string(address, config=self.custom_config)

        return s

    def pdf_image(self,pdfPath,imgPath,zoom_x,zoom_y,rotation_angle):
        pdf = fitz.open(pdfPath)
        for pg in range(0, pdf.pageCount):
            page = pdf[pg]
            trans = fitz.Matrix(zoom_x, zoom_y).preRotate(rotation_angle)
            pm = page.getPixmap(matrix=trans, alpha=False)
            pm.writePNG(imgPath+".png")
        pdf.close()



# Adding custom options

if __name__ == "__main__":
    cc = OCR()
    print(cc.readimage("cvexample2.pdf"))

