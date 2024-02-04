FROM node:20.11-alpine

# Create a non-root user
RUN addgroup app && adduser -S -G app app

# Add the user to the wheel group
RUN adduser app wheel

USER app
WORKDIR /app
RUN mkdir data

# Install sudo
USER root
RUN apk add --no-cache sudo

COPY package* /app/
RUN npm install

# Grant sudo permissions without password prompt
RUN echo "app ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/app

USER app

RUN sudo chown app:app /app/node_modules/
COPY . .
ENV ENV=KUMAR
EXPOSE 3000
CMD npm run start
