import { IconComponentConfig } from '../icon';
import { FeedbackButton } from './feedback-button.interface';

export interface FeedbackComponentConfig {
  icon?: IconComponentConfig;
  title?: string;
  subTitle?: string;
  buttons?: FeedbackButton[];
}
