const app = new Vue ({
  el: '#root',
  data: {
    user: {
      name: 'Elena',
      avatar: '_io'
    },
    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
          {
          date: '10/01/2020 15:30:55',
          text: 'Hai portato a spasso il cane?',
          status: 'sent'
        },
        {
          date: '10/01/2020 15:50:00',
          text: 'Ricordati di dargli da mangiare',
          status: 'sent'
        },
        {
          date: '10/01/2020 16:15:22',
          text: 'Tutto fatto!',
          status: 'received'
        }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [{
          date: '20/03/2020 16:30:00',
          text: 'Ciao come stai?',
          status: 'sent'
        },
        {
          date: '20/03/2020 16:30:55',
          text: 'Bene grazie! Stasera ci vediamo?',
          status: 'received'
        },
        {
          date: '20/03/2020 16:35:00',
          text: 'Mi piacerebbe ma devo andare a fare la spesa.',
          status: 'received'
        }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [{
          date: '28/03/2020 10:10:40',
          text: 'La Marianna va in campagna',
          status: 'received'
        },
        {
          date: '28/03/2020 10:20:10',
          text: 'Sicuro di non aver sbagliato chat?',
          status: 'sent'
        },
        {
          date: '28/03/2020 16:15:22',
          text: 'Ah scusa!',
          status: 'received'
        }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [{
          date: '10/01/2020 15:30:55',
          text: 'Lo sai che ha aperto una nuova pizzeria?',
          status: 'sent'
        },
        {
          date: '10/01/2020 15:50:00',
          text: 'Si, ma preferirei andare al cinema',
          status: 'received'
        }
        ],
      },
    ],
    currentIndex: 0,
    newMsgText: '',
    searchString: '',
  },
  methods: {
    showCurrentContact(index) {
      this.currentIndex = index;
    },

    addNewMsg(text, status) {
      const newMessage = {
        text: text,
        status: status,
        date: '18/07/2022 12:00:00'
      }
      this.contacts[this.currentIndex].messages.push(newMessage);
    },

    sendNewMsg() {
      if(!this.newMsgText) return;
      this.addNewMsg(this.newMsgText, 'sent');
      this.newMsgText = '';
      this.autoMsg();
    },
    
    autoMsg() {
      setTimeout(() => this.addNewMsg('ok', 'received'), 1000);
    },

    filteredContacts() {
      this.contacts.filter((contact) => {
        if (contact.name.includes(this.searchString));
        this.visible = true;
      })
    }
  },
  
})