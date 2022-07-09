#!/bin/bash
cd /root/M/iris/MagicMirror;
flask run --host=localhost --port=8000 & 
sleep 10
echo "after 10 sleep"
python3 browser.py &
echo "After browser.py"
export WORKON_HOME=$HOME/.virtualenvs;
source /usr/local/bin/virtualenvwrapper.sh;
echo "After sourceing virtualenvwraper.sh"
workon iris;
echo "workon iris"
cd /root/M/iris/my_face;
echo "in my_face"
echo $PWD
python real_time.py &
