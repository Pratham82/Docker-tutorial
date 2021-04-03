# A dockerfile must always start by importing the base image.
# We use the keyword 'FROM' to do that.
# In our example, we want import the python image.
# So we write 'python' for the image name and 'latest' for the version

FROM python:latest


# First we will create a directory named "app" in our home directory
# RUN lets you execute commands inside of your Docker image
RUN mkdir -p "/home/app"

# In order to launch our python code, we must import it into our image.
# We use the keyword 'COPY' to do that.
# The first parameter 'main.py' is the name of the file on the host.
# The second parameter '/home/app is the path where to put the file on the image.
# Here we put the file at the image home/app folder.
COPY app.py "/home/app"

# We need to define the command to launch when we are going to run the image.
# We use the keyword 'CMD' to do that.
# The following command will execute "python ./main.py".
CMD [ "python", "/home/app/app.py" ]
