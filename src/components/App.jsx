import {useState} from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    
    const handleClickButton = buttonTitle => {
        switch (buttonTitle) {
            case 'good':
                setGood(good => good + 1);
                break;
            
            case 'neutral':
                setNeutral(neutral => neutral + 1);
                break;
            
            case 'bad':
                setBad(bad => bad + 1);
                break;
            
            default:
                break;
            }
        }

    const total = good + neutral + bad;
    const positiveFeedback = Math.round((good / total) * 100);    


        return (            
          <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}>
            <div className='container__element '>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={Object.keys({good, neutral, bad})}
                        clickFeedback={handleClickButton}                    
                    />
                </Section>

                <Section title="Statistics">
                    {total > 0 ? (
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positiveFeedback={positiveFeedback}
                        />
                    ) : (
                        <Notification message="There is no feedback"/>
                    )}
                </Section>
            </div>
            </div>
            
        );
    }
  // return (
  //   <div
  //     style={{
  //       height: '100vh',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       fontSize: 40,
  //       color: '#010101'
  //     }}
  //   >
  //     <Feedback /> 
  //   </div>
  // );


