import argparse
import sys
import cv2
import os
import numpy as np

parser = argparse.ArgumentParser()
parser.add_argument("--src", metavar="source",
                    help="Source folder of the Image files")

parser.add_argument("--size", metavar="size", nargs='+', type=int,
                    help="Size of the new image(Width Height)")
parser.add_argument("--ext", metavar="extension", nargs='+',
                    help="""Extensions of files to be resized (Default: jpg png).
                         Supported extensions - Extensions Supported by OpenCV.""")
args = parser.parse_args()


def resize_image(img, size):
    """Resize the image to given size
    params:
        img - array of image pixels
        size - tuple => (Width, Height)
    """

    return cv2.resize(img, size, interpolation=cv2.INTER_AREA)


def load_images(src, ext, size):
    """Resize the images in given source folder
    and save to the destinantion folder
    params:
        src - Source folder
        ext - Extensions of images to be 
    """
    dirs = os.listdir(src)
    for item in dirs:
        path = src+item
        if (os.path.isfile(path)==False):
            os.chdir(path)
            files_ls = os.listdir()
            files = [file for file in files_ls if((len(file.split('.')) > 1) 
                     and (file.split('.')[1].lower() in ext))]
        
            for file in files:
                cd = os.getcwd()
                img = cv2.imread(file)
      
                resized = np.array(cv2.resize(img, size, interpolation=cv2.INTER_AREA))
          
                cv2.imwrite(file,resized)
                print("\nResizing Image:", path + file)
            
                

   
load_images(args.src, args.ext, tuple(args.size))
   
    
