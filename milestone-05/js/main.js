"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts: [
        {
          name: "Michele",
          avatar: "./img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020, 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020, 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              date: "10/01/2020, 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "./img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020, 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020, 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020, 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "./img/avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020, 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020, 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020, 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "./img/avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020, 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020, 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "./img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020, 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              date: "10/01/2020, 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "./img/avatar_6.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020, 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              date: "10/01/2020, 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              date: "10/01/2020, 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "./img/avatar_7.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020, 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              date: "10/01/2020, 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "./img/avatar_8.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020, 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "10/01/2020, 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "10/01/2020, 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],
      replyList: [
        "Va bene, grazie!",
        "Capito, ci sentiamo più tardi.",
        "Non vedo l'ora!",
        "Perfetto!",
        "Sì, esattamente così.",
        "Grazie mille!",
        "Certo, nessun problema.",
        "Interessante, grazie per la condivisione!",
        "Ok, ho capito.",
        "Ci sentiamo presto!",
        "Proprio quello che mi serviva!",
        "Grazie per l'informazione!",
        "Ecco cosa penso anch'io.",
        "Non vedo l'ora di saperne di più!",
        "Ok, nessun problema.",
      ],
      currentContact: 0,
      newMessage: "",
      searchContact: "",
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== "") {
        this.contacts[this.currentContact].messages.push({
          date: luxon.DateTime.now()
            .setLocale("en-GB")
            .toLocaleString(luxon.DateTime.DATETIME_SHORT),
          message: this.newMessage,
          status: "sent",
        });
        this.newMessage = "";
        this.reply();
      }
    },
    reply() {
      setTimeout(() => {
        this.contacts[this.currentContact].messages.push({
          date: luxon.DateTime.now()
            .setLocale("en-GB")
            .toLocaleString(luxon.DateTime.DATETIME_SHORT),
          message: this.replyList[Math.floor(Math.random() * this.replyList.length)],
          status: "received",
        });
      }, 1000);
    },
    searchResult() {
      if (this.searchContact.trim() !== "") {
        this.contacts.forEach((contact) => {
          if (
            !contact.name
              .toLowerCase()
              .includes(this.searchContact.toLowerCase())
          ) {
            contact.visible = false;
          } else {
            contact.visible = true;
          }
        });
      } else {
        this.contacts.forEach((contact) => {
          contact.visible = true;
        });
      }
    },
    deleteMessage(index) {
      this.contacts[this.currentContact].messages.splice(index, 1);
    },
  },
  watch: {
    searchContact() {
      this.searchResult();
    },
  },
}).mount("#app");
