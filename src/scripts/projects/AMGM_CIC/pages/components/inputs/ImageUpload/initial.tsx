import type { ChangeEventHandler, FC, MouseEventHandler } from 'react';
import { useCallback, useContext } from 'react';
import { OptionsContext } from '.';

interface property {
  changed?: (value: string) => void;
  placeholder?: string;
}
const Initial: FC<property> = (props) => {
  const { setMainState } = useContext(OptionsContext)!;
  const handleUploadClick: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = function () {
          props.changed?.(reader.result as string);
        }.bind(this);
      }
    },
    [props],
  );
  const handleSearchClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    () => {
      setMainState('search');
    },
    [setMainState],
  );
  const handleGalleryClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    () => {
      setMainState('gallery');
    },
    [setMainState],
  );
  return (
    <>
      <input
        accept="image/*"
        id="contained-button-file"
        type="file"
        onChange={handleUploadClick}
        placeholder={props.placeholder}
      />
      <button type={'button'} onClick={handleSearchClick}>
        Search
      </button>
      <button type={'button'} onClick={handleGalleryClick}>
        Gallery
      </button>
    </>
  );
};

export default Initial;
