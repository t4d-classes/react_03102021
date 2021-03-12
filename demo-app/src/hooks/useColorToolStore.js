import { useList } from './useList';

export function useColorToolStore(initialColors) {
  const [colors, appendColor] = useList(initialColors);

  return { colors, appendColor };
}
