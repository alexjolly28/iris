from statistics import mode

import cv2
from keras.models import load_model
import numpy as np
import voice
from utils.datasets import get_labels
from utils.inference import detect_faces
from utils.inference import apply_offsets
from utils.inference import load_detection_model
from utils.preprocessor import preprocess_input


# parameters for loading data and images
detection_model_path = 'trained_models/detection_models/haarcascade_frontalface_default.xml'
emotion_model_path = 'trained_models/emotion_models/fer2013_mini_XCEPTION.102-0.66.hdf5'
emotion_labels = get_labels('fer2013')

# hyper-parameters for bounding boxes shape
frame_window = 10
emotion_offsets = (20, 40)

# loading models
face_detection = load_detection_model(detection_model_path)
emotion_classifier = load_model(emotion_model_path, compile=False)

# getting input model shapes for inference
emotion_target_size = emotion_classifier.input_shape[1:3]

# starting lists for calculating modes
emotion_window = []

# starting video streaming
cv2.namedWindow('window_frame')
video_capture = cv2.VideoCapture(0)

def main():
    
    bgr_image = video_capture.read()[1]
    gray_image = cv2.cvtColor(bgr_image, cv2.COLOR_BGR2GRAY)
    rgb_image = cv2.cvtColor(bgr_image, cv2.COLOR_BGR2RGB)
    faces = detect_faces(face_detection, gray_image)

    for face_coordinates in faces:

        x1, x2, y1, y2 = apply_offsets(face_coordinates, emotion_offsets)
        gray_face = gray_image[y1:y2, x1:x2]
        area = (y2-y1) * (x2-x1)
        dist=int(area/10000)
        
        # print (dist)
        if 0<=dist<=20:


            try:
                gray_face = cv2.resize(gray_face, (emotion_target_size))
            except:
                continue

            gray_face = preprocess_input(gray_face, True)
            gray_face = np.expand_dims(gray_face, 0)
            gray_face = np.expand_dims(gray_face, -1)
            emotion_prediction = emotion_classifier.predict(gray_face)
            emotion_probability = np.max(emotion_prediction)
            emotion_label_arg = np.argmax(emotion_prediction)
            emotion_text = emotion_labels[emotion_label_arg]
            emotion_window.append(emotion_text)

            if len(emotion_window) > frame_window:
                emotion_window.pop(0)
            try:
                emotion_mode = mode(emotion_window)
            except:
                continue
            # print(emotion_text, emotion_probability)
            if emotion_probability >0.5 :
                if emotion_text == 'angry':
                    print("angry")
                    voice.talkToMe("Why So seriuos")
                    return False
                elif emotion_text == 'sad':
                    print('sad')
                    voice.talkToMe("Why So Sad ")

                    return False
                elif emotion_text == 'happy':
                    print("happy")
                    voice.talkToMe("You look so happy ")

                    return False
                elif emotion_text == 'surprise':
                    print("surprise")
                    voice.talkToMe("Whats the surprise with you")

                    return False
                else:
                    print("nutral")
                    voice.talkToMe("have a great day ")

                    return False
                # return emotion_text

            else :
                print("make a smile ")
                voice.talkToMe("make a smile and have a good day")


                return False



        else:
            print("distace")        
            return True
    return True        

# if __name__ == "__main__":
#     print(main())

#     while main():
#         pass
