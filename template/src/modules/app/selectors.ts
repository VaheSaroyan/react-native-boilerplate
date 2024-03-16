import { RootState } from '~/store/types';

export const privacyDeclarationShownSelector = (s: RootState) => s.app.privacyDeclarationShown;

export const splashVisibleSelector = (s: RootState) => s.app.splashVisible;
