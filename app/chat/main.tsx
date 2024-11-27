'use client'
import { FC, useReducer, useCallback } from 'react';
import { AppProps, ConversationsProps, LocaleProps } from '@/interface';
import Button from '@/components/button';
import PencilSquare from '@heroicons/react/24/solid/PencilSquareIcon';
import MenuItem from '@/components/menu-item';
import Welcome from '@/components/welcome';
import Form from '@/components/form';
import XPowerBy, { XPowerByPrivacy } from '@/components/x-power-by';
import I18N from '@/i18n';

enum Status {
  INIT = 'init',
  READY = 'ready',
  TYPING = 'typing',
  SENDING = 'sending',
  ERROR = 'error',
  SUCCESS = 'success',
}

interface ExtraPropss {
  user: string;
  conversations: ConversationsProps[];
}
interface IState {
  status: Status;
  conversations: ConversationsProps[];
  inputs: Record<string, string>;
  query: string;
  conversation_id: string | null;
  user: string | null;
}

interface IAction {
  type: string;
  payload: any;
}

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'NEW_CONVERSATION':
      return action.payload;
    case 'SET_QUERY':
      return { ...state, query: action.payload };
    case 'SET_INPUT':
      return { ...state, status: Status.READY, inputs: action.payload };
    case 'SET_CONVERSATION_ID':
      return { ...state, conversation_id: action.payload };
    default:
      return state;
  }
};

const Chat: FC<LocaleProps> = ({}) => {
  return <>Chat</>;
};

const Main: FC<AppProps & LocaleProps & ExtraPropss> = ({
  user,
  user_input_form,
  locale,
  conversations,
}) => {
  const initialState: IState = {
    status: Status.INIT,
    conversations,
    inputs: {},
    query: '',
    conversation_id: null,
    user,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNewConversation = useCallback(() => {
    dispatch({ type: 'NEW_CONVERSATION', payload: initialState });
  }, [initialState]);

  const handleFormSubmit = useCallback((items: any[]) => {
    const inputs = items.reduce((acc, item) => {
      acc[item.variable] = item.default;
      return acc;
    }, {} as Record<string, string>);
    dispatch({ type: 'SET_INPUT', payload: inputs });
  }, []);

  return (
    <>
      <div className="flex flex-col shrink-0 w-60 h-screen bg-white hidden sm:block">
        {/* Sidebar content */}
      </div>
      <div className="flex flex-col w-full pt-32 px-5 sm:px-8 md:px-72">
        {state.status === Status.INIT ? (
          <>
            <Welcome
              name={I18N(locale)('app.welcome_message')}
              description={I18N(locale)('app.welcome_message_description')}
            />
            <Form
              hint={I18N(locale)('app.initial_prompt')}
              items={user_input_form.map((item) => ({
                type: Object.keys(item)[0],
                label: Object.values(item)[0].label,
                variable: Object.values(item)[0].variable,
                required: Object.values(item)[0].required,
                max_length: Object.values(item)[0].max_length,
                default: Object.values(item)[0].default,
                options: Object.values(item)[0].options,
              }))}
              onSubmit={handleFormSubmit}
            />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <XPowerByPrivacy />
              <XPowerBy />
            </div>
          </>
        ) : (
          <Chat locale={locale} />
        )}
      </div>
    </>
  );
};

export default Main;