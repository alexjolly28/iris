import face_rec
import emotion
import face_dect
import voice


def main():
    names = list()
    n=int(0)
    flag =True

    while True:
        try:
            while face_dect.face():
                # print("detected")
                # face_dect.frame()
                predictions = face_rec.predict("test.jpg", model_path="trained_knn_model.clf")
                # print(predictions)
                for name in predictions:
                    if name != 'unknown':
                        names.append(name)
                        count = names.count(name)
                        # print(name,"=",count)
                        if (count==1):
                            print(name)
                            flag=True
                            voice.talkToMe("Hai "+name+" How are you")
                       
                            while (emotion.main()):
                                print("ok")
                                
                                # if(emotion.main() == True):
                                #     break
                                
                                                                   
                        
                    else:

                        if flag==True:
                            print("who are you")
                            voice.talkToMe("Who are You")
                            flag=False
            print("no face")
            n=n+1
            if(n>=20):
                names.clear()
                print("cleard")
                n=0
                   

        except (IndexError):
            print("error")


if __name__ == "__main__":
    # while True:
        main()
       
        

