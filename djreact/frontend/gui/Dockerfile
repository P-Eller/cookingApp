FROM node

WORKDIR /app/frontend/gui
COPY package.json /app/frontend/gui

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]