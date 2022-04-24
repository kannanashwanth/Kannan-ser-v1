FROM fusuf/whatsasena:latest

RUN git clone https://github.com/kannanashwanth/Kannan-ser-v1 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/Chunkindepadayali/media

CMD ["node", "bot.js"]
