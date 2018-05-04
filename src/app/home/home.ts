import { Component, ViewChild } from '@angular/core';
import { Platform, Content } from 'ionic-angular';
import { ApiAiClient } from 'api-ai-javascript';
import { Message } from './models/message';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) content: Content;
  accessToken: string = '[YOUR_ACCESS_TOKEN]';
  client;
  messages: Message[] = [];
  messageForm: any;
  chatBox: any;
  isLoading: boolean;

  constructor(public platform: Platform, public formBuilder: FormBuilder) {
    this.chatBox = '';

    this.messageForm = formBuilder.group({
      message: new FormControl('')
    });

    this.client = new ApiAiClient({
      accessToken: this.accessToken
    });
  }

  sendMessage(req: string) {
    if (!req || req === '') {
      return;
    }
    this.messages.push({ from: 'user', text: req });
    this.isLoading = true;

    this.client
      .textRequest(req)
      .then(response => {
        /* do something */
        console.log('res');
        console.log(response);
        this.messages.push({
          from: 'bot',
          text: response.result.fulfillment.speech
        });
        this.scrollToBottom();
        this.isLoading = false;
      })
      .catch(error => {
        /* do something here too */
        console.log('error');
        console.log(error);
      });

    this.chatBox = '';
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 100);
  }
}
