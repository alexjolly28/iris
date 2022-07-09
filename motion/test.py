import numpy as np
import cv2 
cap = cv2.VideoCapture(0)
fgbg = cv2.createBackgroundSubtractorMOG2()


while(cap.isOpened()):
    ret, frame = cap.read()

    fgmask = fgbg.apply(frame)
    kernal = np.ones((5,5),np.uint8)
     
    fgmask=cv2.dilate(fgmask, kernal)
    

    (_,contours,hierarchy)=cv2.findContours(fgmask,cv2.RETR_TREE,cv2.CHAIN_APPROX_SIMPLE)

    for pic, contour in enumerate(contours):

        area = cv2.contourArea(contour)
        if(area>10000):
            x,y,w,h = cv2.boundingRect(contour) 
            frame = cv2.rectangle(frame,(x,y),(x+w,y+h),(255,255,255),2)
            cv2.putText(frame,"ditected",(x,y),cv2.FONT_HERSHEY_SIMPLEX, 1.0, (255,255,255))
    
            print("detected")


    cv2.imshow('frame',frame)
    cv2.imshow('test',fgmask)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()