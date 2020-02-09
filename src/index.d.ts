import * as React from 'react';

declare module 'react-loading-image-effect' {
  export interface LoadingImageEffectProps {
    delay?: number;
    onError?: (errorEvent: Event) => void;
    placeholder: string;
    src: string;
    srcSetData?: {
      srcSet: string;
      sizes: string;
    };
  }

  export interface LoadingImageEffectState {
    image: string;
    loading: boolean;
    srcSetData?: {
      srcSet: string;
      sizes: string;
    };
  }

  export default class LoadingImageEffect extends React.Component<
    LoadingImageEffectProps,
    LoadingImageEffectState
  > {}
}
