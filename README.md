# VisageAI

## Inspiration:

With the advancement of AI, the number of AI-generated images circulating online has increased, making it increasingly challenging to distinguish them from real images. This project specifically addresses portrait photos by implementing a classification model designed to differentiate AI-generated portraits of individuals from real ones.

## What it does:

This project enables users to distinguish real portrait photos from AI-generated ones through a simple, interactive website. Users can upload an image, and our model analyzes facial features to determine its authenticity, providing a confidence score for clarity.

<img width="1470" alt="Screenshot 2025-03-19 at 2 17 10 PM" src="https://github.com/user-attachments/assets/6dfa844e-f606-40f9-9ebb-2bfdc03aa74b" />

<img width="1226" alt="Screenshot 2025-03-19 at 2 19 20 PM" src="https://github.com/user-attachments/assets/26266d61-61d6-4bd5-a0a3-b653a0a4394f" />

In the image above we demostrate our website in use, a AI generated portrait is uploaded and our model was able to deduce that the likely hood of this being a real image is 0%. 

## How we built it:

This application features a Flask backend integrated with TensorFlow for processing, paired with an interactive frontend for a seamless user experience.

- **Backend**: Built with Python and Flask
- **Classification Model**: Developed using TensorFlow (Keras)
- **Frontend**: Designed with HTML5, CSS3, and JavaScript
- **Design**: Custom CSS with responsive design principles

## Challenges we ran into:

A challenge we faced was training the actual model, as many iterations of our model were either overfitting or underfitting the dataset. Finding a good balance was an aspect of the project that took a sizable amount of time. Another challenge we faced was uploading our project to the cloud and integrating an interactive UI for our website. More specifically, since this was our first time trying to upload a project to the cloud, it took some time finding the right configuration and setup. Once we found the right one for our use case, there was also some debugging we had to do for everything to work together properly. Additionally, a challenge that we are still trying to improve upon is the fact that the accuracy of our current model is around 85%. This is an acceptable percentage for now, but we would like to improve our accuracy by training our model with a larger dataset. The rationale for improving our model is to make it more reliable in a wider range of applications.

## Accomplishments that we're proud of:

- We successfully developed and demonstrated the proof of concept we envisioned at the start of the project.

- Built and deployed a working AI-powered system that integrates a Flask backend, a TensorFlow model, and a responsive frontend.

- Overcame cloud deployment challenges to ensure our model runs efficiently on AWS.

- Created an intuitive and interactive UI that enhances user experience.

- Achieved an initial model accuracy of 85%, providing a strong foundation for further improvements.

## What we learned:

Beyond acquiring new technical skills, we gained valuable experience in deploying machine learning models in a real-world setting. We learned how to:

- Train and fine-tune AI models – including data preprocessing and strategies to prevent overfitting.

- Deploy applications to the cloud – navigating AWS services such as S3, API Gateway, and Lambda to ensure scalability and accessibility.

- Integrate AI with web development – connecting a machine learning model to an interactive frontend while ensuring seamless API communication.

- Troubleshoot deployment and performance issues – resolving challenges related to cloud configuration, security permissions, and model inference efficiency.

Overall, this project not only strengthened our technical skills but also provided hands-on experience in overcoming development challenges.








