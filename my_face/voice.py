# from gtts import gTTS
import speech_recognition as sr
import os

def talkToMe(audio):
    "speaks audio passed as argument"

    print(audio)
    for line in audio.splitlines():
        os.system("say " + audio)



def main(name):
    if "Alex" in name:
        talkToMe('Hai Alex , How Are You')


