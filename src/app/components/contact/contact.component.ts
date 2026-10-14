import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  private fb = inject(FormBuilder);

  private whatsappNumber = '5583981024384';

  sent = signal(false);

  form = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    interest: ['iPhone 17 Pro Max'],
    message: [''],
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, phone, interest, message } = this.form.value;

    const lines = [
      `Olá! Vim pelo site da Central dos Celulares.`,
      ``,
      `Nome: ${name}`,
      `Telefone: ${phone}`,
      `Modelo de interesse: ${interest}`,
    ];
    if (message && message.trim()) {
      lines.push(`Mensagem: ${message.trim()}`);
    }

    const text = encodeURIComponent(lines.join('\n'));
    const url = `https://wa.me/${this.whatsappNumber}?text=${text}`;
    window.open(url, '_blank', 'noopener');

    this.sent.set(true);
    this.form.reset({ interest: 'iPhone 17 Pro Max' });
  }
}
