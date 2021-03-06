import {useState, useEffect, useCallback} from 'react';
import type {Dispatch, SetStateAction} from 'react';

type RefType = {current: HTMLElement | null};

type VisibilityTogglerProps = {
  defaultState?: boolean;
  refs: Array<HTMLElement | RefType>;
};

export default function useVisibilityToggler({
  defaultState = false,
  refs,
}: VisibilityTogglerProps): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [isOpen, setIsOpen] = useState(defaultState);

  const handleChangePagePosition = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleMousedown = useCallback(
    ({target}: MouseEvent) => {
      if (
        target instanceof Node &&
        !refs.some((ref) => {
          if (ref instanceof Node) return ref.contains(target);
          return ref.current && ref.current.contains(target);
        })
      ) {
        setIsOpen(false);
      }
    },
    [refs],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('scroll', handleChangePagePosition);
      window.addEventListener('resize', handleChangePagePosition);
      window.addEventListener('mousedown', handleMousedown);
    }

    return () => {
      window.removeEventListener('scroll', handleChangePagePosition);
      window.removeEventListener('resize', handleChangePagePosition);
      window.removeEventListener('mousedown', handleMousedown);
    };
  }, [isOpen, handleChangePagePosition, handleMousedown]);

  return [isOpen, setIsOpen];
}
