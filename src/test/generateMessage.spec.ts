import { template } from './generateMessage.data';
import { generateMessage } from 'utils/generateMessage';

describe('usegenerateMessage', () => {
  it('Message generates correctly', () => {
    const message = generateMessage(template, {
      '{firstname}': '',
      '{lastname}': '',
      '{company}': '',
      '{position}': '',
    });
    expect(message).toBe(
      'Hello, Bill Gates! Our company offers you a job as a cleaner!\n\nAnd goodbye, Bill Gates!',
    );
  });

  it('Message generates correctly with firstname', () => {
    const message = generateMessage(template, {
      '{firstname}': 'John',
      '{lastname}': '',
      '{company}': '',
      '{position}': '',
    });
    expect(message).toBe(
      'Hello, John! Our company offers you a job as a cleaner!\n\nAnd goodbye, John!',
    );
  });
  it('Message generates correctly with full name', () => {
    const message = generateMessage(template, {
      '{firstname}': 'John',
      '{lastname}': 'Snow',
      '{company}': '',
      '{position}': '',
    });
    expect(message).toBe(
      'Hello, John Snow! Our company offers you a job as a cleaner!\n\nAnd goodbye, John Snow!',
    );
  });
  it('Message generates correctly with full name and company', () => {
    const message = generateMessage(template, {
      '{firstname}': 'John',
      '{lastname}': 'Snow',
      '{company}': 'google',
      '{position}': '',
    });
    expect(message).toBe(
      'Hello, John Snow! Our company google offers you a job as a cleaner!\n\nAnd goodbye, John Snow!',
    );
  });
  it('Message generates correctly with full name and company and position', () => {
    const message = generateMessage(template, {
      '{firstname}': 'John',
      '{lastname}': 'Snow',
      '{company}': 'google',
      '{position}': 'developer',
    });
    expect(message).toBe(
      'Hello, John Snow! Our company google offers you a job as a developer!\n\nAnd goodbye, John Snow!',
    );
  });
  it('Message generates correctly with extra variable', () => {
    const message = generateMessage(template, {
      '{firstname}': 'John',
      '{lastname}': 'Snow',
      '{company}': 'google',
      '{position}': 'developer',
      '{unexpected}': 'something unexpected',
    });
    expect(message).toBe(
      'Hello, John Snow! Our company google offers you a job as a developer!\n\nAnd goodbye, John Snow!',
    );
  });
  it('Message generates correctly with missing variable', () => {
    template[0].message = `${template[0].message}{director}`;
    const message = generateMessage(template, {
      '{firstname}': 'John',
      '{lastname}': 'Snow',
      '{company}': 'google',
      '{position}': 'developer',
      '{unexpected}': 'something unexpected',
    });
    expect(message).toBe(
      'Hello, {director}John Snow! Our company google offers you a job as a developer!\n\nAnd goodbye, John Snow!',
    );
  });
  it('Message generates correctly with missing variable in condition', () => {
    template[template.length - 1].condition = {
      variable: '{director}',
      success: [{ message: '{director}', key: 2 }],
      fail: [{ message: '', key: 3 }],
    };
    template.push({ message: '', key: 1 });
    const message = generateMessage(template, {
      '{firstname}': 'John',
      '{lastname}': 'Snow',
      '{company}': 'google',
      '{position}': 'developer',
      '{unexpected}': 'something unexpected',
    });
    expect(message).toBe(
      'Hello, {director}John Snow! Our company google offers you a job as a developer!\n\nAnd goodbye, John Snow!{director}',
    );
  });
});
