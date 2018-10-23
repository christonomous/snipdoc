# Develope Python Project
> Since now only Note so far.

## Setup Virtual Enviroment
> Note better use PIPENV
To setup an virtual enviroment for you project, go into your projectfolder and run the fallowing:
> we are on python 3.6^
> Note: in most tutorials it said we need to go with `python3` in terminal. In my case `python` is enough (I have to find out why)

```
python -m venv env
```

Now you should see an `env` folder in your project directory.

To activate the enviroment, you need to run the Script, which you can find in `env/Scripts/`. It depends on which OS you use. 
If you want to deactivate the virtual enviroment, just type in
```
deactivate
```

## Import Module/Packages
There are many ways to import a python file, all with their pros and cons.

Don't just hastily pick the first import strategy that works for you or else you'll have to rewrite the codebase later on when you find it doesn't meet your needs.

I'll start out explaining the easiest example #1, then I'll move toward the most professional and robust example #7

### Example 1
Import a python module with python interpreter:

Put this in /home/el/foo/fox.py:

```
def what_does_the_fox_say():
   print("vixens cry")
```

Get into the python interpreter:

```
el@apollo:/home/el/foo$ python
  Python 2.7.3 (default, Sep 26 2013, 20:03:06) 
>>> import fox
>>> fox.what_does_the_fox_say()
  vixens cry
>>> 
```

You imported fox through the python interpreter, invoked the python function what_does_the_fox_say() from within fox.py.

### Example 2
Use from ... import ... functionality:

Put this in /home/el/foo3/chekov.py:

```
def question():
   print "where are the nuclear wessels?"
```

Put this in /home/el/foo3/main.py:

```
from chekov import question
question()
```

Run it like this:

```
el@apollo:/home/el/foo3$ python main.py 
  where are the nuclear wessels?
```

If you defined other functions in chekov.py, they would not be available unless you import *

### Example 3
Most Robust: Import files in python with the bare import command:

Make a new directory `/home/el/foo5/`
Make a new directory `/home/el/foo5/herp`
Make an empty file named `__init__.py` under `herp`:

```
el@apollo:/home/el/foo5/herp$ touch __init__.py
el@apollo:/home/el/foo5/herp$ ls
__init__.py
```

Make a new directory /home/el/foo5/herp/derp

Under `derp`, make another `__init__.py` file:

```
el@apollo:/home/el/foo5/herp/derp$ touch __init__.py
el@apollo:/home/el/foo5/herp/derp$ ls
__init__.py
```

Under `/home/el/foo5/herp/derp` make a new file called `yolo.py`. Put this in there:

```
def skycake():
   print "SkyCake evolves to stay just beyond the cognitive reach of " +
   "the bulk of men. SKYCAKE!!"
```

The moment of truth. Make the new file `/home/el/foo5/main.py`, put this in there;

```
from herp.derp.yolo import skycake
skycake()
```

Run it:

```
el@apollo:/home/el/foo5$ python main.py
SkyCake evolves to stay just beyond the cognitive reach of the bulk 
of men. SKYCAKE!!
```

The empty `__init__.py` file communicates to the python interpreter that the developer intends this directory to be an importable package.

If you want to see my post on how to include ALL .py files under a directory see here: https://stackoverflow.com/a/20753073/445131

### Bonus protip

Whether you are using Mac, Linux or Windows, you need to be using python's idle editor as described here. It will unlock your python world. http://www.youtube.com/watch?v=DkW5CSZ_VII
