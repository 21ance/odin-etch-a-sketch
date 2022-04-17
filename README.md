# Etch a Sketch
Hello, this is an etch-a-sketch project developed using JavaScript. The use can *draw* on the sketch by hovering the mouse. For now there are two available hover effects, the default black, and rainbow (random colors). The user can also use an eraser, or the clear button to remove the hovered colors. There are three available grid sizes: 10x10, 20x20, and 30x30.

------------
#### How I approached this project
1. Created the UI on Figma, and applied the design using HTML, and CSS.
2. Added basic hover and click effects using CSS, and JavaScript (I used switch case which also made it easier to insert a function on each buttons on latter steps).
3. I first created a function to generate the grid - nested for loop and flexbox was used.
4. I applied the above function to the grid size buttons.
5. Utilized the forEach loop and 'mouseenter' Event Listener to test out a hover effect. Then created a function for it.
6. Assigned the function above to the *default button*
7. Redid steps 5 and 6 with minor adjustments to achieve the expected output for other buttons (*rainbow*, *eraser*, and *clear*)
------------
#### Points for improvement
- Add a color picker
- Add a slider for grid size
- Mobile responsiveness
------------
#### Conclusion
This was a fun project. I was able to utilize DOM manipulation which is relatively satisfying. I will come back soon to apply my points for improvement. 
------------
[Live Demo](https://21ance.github.io/odin-etch-a-sketch/ "Live")
