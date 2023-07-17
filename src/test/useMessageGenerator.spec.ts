import { template } from './useMessageGenerator.data';
import { useMessageGenerator } from 'hooks/useMessageGenerator';

describe('useMessageGenerator', () => {
  const messageGenerator = useMessageGenerator();

  it('Message generates correctly', () => {
    const message = messageGenerator(template, {});
    expect(message).toBe(
      'Hello, Bill Gates! Our company offers you a job as a cleaner!\n\nAnd goodbye, Bill Gates!',
    );
  });

  it('Message generates correctly with firstname', () => {
    const message = messageGenerator(template, { '{firstname}': 'John' });
    console.log(message);
    expect(message).toBe(
      'Hello, John! Our company offers you a job as a cleaner!\n\nAnd goodbye, John!',
    );
  });
  it('Message generates correctly with full name', () => {
    const message = messageGenerator(template, { '{firstname}': 'John', '{lastname}': 'Snow' });
    console.log(message);
    expect(message).toBe(
      'Hello, John Snow! Our company offers you a job as a cleaner!\n\nAnd goodbye, John Snow!',
    );
  });
  it('Message generates correctly with full name and company', () => {
    const message = messageGenerator(template, {
      '{firstname}': 'John',
      '{lastname}': 'Snow',
      '{company}': 'google',
    });
    console.log(message);
    expect(message).toBe(
      'Hello, John Snow! Our company google offers you a job as a cleaner!\n\nAnd goodbye, John Snow!',
    );
  });
  it('Message generates correctly with full name and company and position', () => {
    const message = messageGenerator(template, {
      '{firstname}': 'John',
      '{lastname}': 'Snow',
      '{company}': 'google',
      '{position}': 'developer',
    });
    console.log(message);
    expect(message).toBe(
      'Hello, John Snow! Our company google offers you a job as a developer!\n\nAnd goodbye, John Snow!',
    );
  });
  it('Message generates correctly with extra variable', () => {
    const message = messageGenerator(template, {
      '{firstname}': 'John',
      '{lastname}': 'Snow',
      '{company}': 'google',
      '{position}': 'developer',
      '{unexpected}': 'something unexpected',
    });
    console.log(message);
    expect(message).toBe(
      'Hello, John Snow! Our company google offers you a job as a developer!\n\nAnd goodbye, John Snow!',
    );
  });
  it('Message generates correctly with missing variable', () => {
    template[0].message = `${template[0].message}{director}`;
    const message = messageGenerator(template, {
      '{firstname}': 'John',
      '{lastname}': 'Snow',
      '{company}': 'google',
      '{position}': 'developer',
      '{unexpected}': 'something unexpected',
    });
    console.log(message);
    expect(message).toBe(
      'Hello, John Snow! Our company google offers you a job as a developer!\n\nAnd goodbye, John Snow!',
    );
  });
  it('Message generates correctly with missing variable in condition', () => {
    template[template.length - 1].condition = {
      variable: '{director}',
      success: [{ message: '{direcotr}', key: 2 }],
      fail: [{ message: '', key: 3 }],
    };
    template.push({ message: '', key: 1 });
    const message = messageGenerator(template, {
      '{firstname}': 'John',
      '{lastname}': 'Snow',
      '{company}': 'google',
      '{position}': 'developer',
      '{unexpected}': 'something unexpected',
    });
    console.log(message);
    expect(message).toBe(
      'Hello, John Snow! Our company google offers you a job as a developer!\n\nAnd goodbye, John Snow!',
    );
  });
});
