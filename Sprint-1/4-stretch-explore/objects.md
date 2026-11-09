## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
    ƒ log() { [native code] }
    
Now enter just `console` in the Console, what output do you get back?

Object [console] {
  log: [Function: log],
  ...
}


Try also entering `typeof console`

    'object'

Answer the following questions:

What does `console` store?
console is a built-in object that stores methods like log() and assert().

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
   
