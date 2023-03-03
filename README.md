# PixelPal

Use openAI API and JavaScript to build a AI image generator

[Link to project](https://creepy-eel-spacesuit.cyclic.app/)

![alt tag](https://res.cloudinary.com/dhhiphscp/image/upload/v1670635876/portfolio/2022-12-08_22_56_39-Window_yagfdo.png)

## How does it work

A text-based AI image generator web app is a web application that utilizes the OpenAI image generator API to generate images based on a given text description. 
The app allows users to input a text description of an image, and the API generates a new image that corresponds to the description. The generated images are created using state-of-the-art machine learning techniques and can be used for a variety of purposes such as training machine learning models or creating new designs. The advantage of this approach is that it allows the generation of images that are not limited to a pre-existing dataset, allowing for a greater degree of flexibility and creativity.

Example prompt: Cat with umbrella in kimono in bamboo garden will generate am image like below:

![alt tag](https://res.cloudinary.com/dhhiphscp/image/upload/c_scale,w_226/v1670700083/portfolio/cat_with_umbrella_in_kimono_in_bamboo_garden_xuegam.png)

## How It's Made:

**Back-end:** Node, Express, OpenAI API

**Front-end:** HTML, CSS, JavaScript

- Obtain an API key from OpenAI at [Here](https://beta.openai.com/account/api-keys)
- Make a post request to OpenAI to get image url with user input from front-end
- Fetch image url from JavaScript from front-end
- Display image

## Optimizations

OpenAI also has other fun api like Text completion and Code completion. I'd love to build more interesting projects with them in the future.

## Lesson learned

I can spend a whole day on reading about DALL·E. If you are also interested about DALL·E, check out this blog post [here](https://openai.com/blog/dall-e/)

