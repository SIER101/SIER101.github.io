import dynamic from 'next/dynamic';
import type { Dispatch, FC, InputHTMLAttributes, SetStateAction } from 'react';
import { createContext, useCallback, useState } from 'react';

interface property extends InputHTMLAttributes<HTMLInputElement> {
  imageGallery?: string[];
  changed?: (value: string) => void;
}
type state = 'initial' | 'search' | 'gallery';
interface optionsContext {
  setMainState: Dispatch<SetStateAction<state>>;
}

const Initial = dynamic(() => import('./initial'));
const Search = dynamic(() => import('./search'));

export const OptionsContext = createContext<optionsContext | null>(null);

const ImageUploadCard: FC<property> = (props) => {
  const [mainState, setMainState] = useState<state>('initial');
  const [_selectedFile, setSelectedFile] = useState<string>(props.defaultValue as string);
  const checkImage = useCallback(async (url: string) => {
      try {
        const res = await fetch(url);
        const buff = await res.blob();
        if (!buff.type.startsWith('image/')) throw new Error(`not an image (${buff.type})`);
      } catch (error) {
        return false;
      }
      return true;
    }, []),
    upload = useCallback(
      async (url: string) => {
        if (!(await checkImage(url))) return;
        props.changed?.(url);
        setSelectedFile(url);
        setMainState('initial');
      },
      [props, checkImage],
    );
  return (
    <div>
      <OptionsContext.Provider
        value={{
          setMainState,
        }}
      >
        {(() => {
          switch (mainState) {
            case 'initial':
              return <Initial changed={upload} placeholder={props.placeholder} />;
            case 'search':
              return <Search changed={upload} />;
            default:
              setMainState('initial');
              return <></>;
          }
        })()}
      </OptionsContext.Provider>
    </div>
  );
};

ImageUploadCard.defaultProps = {
  imageGallery: [],
};

export default ImageUploadCard;
