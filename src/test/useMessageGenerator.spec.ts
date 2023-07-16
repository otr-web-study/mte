import { template } from './useMessageGenerator.data';
import { useMessageGenerator } from 'hooks/useMessageGenerator';

describe('useMessageGenerator', () => {
  const messageGenerator = useMessageGenerator();

  it('Message generates correctly', () => {
    const message = messageGenerator(template, {});
    expect(message).toBe(
      'Hello, world! Our company offers you a job as a cleaner!\nAnd goodbye, world!',
    );
  });
});
