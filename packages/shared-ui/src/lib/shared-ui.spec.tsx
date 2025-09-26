import { render } from '@testing-library/react';

import NxDemoSharedUi from './shared-ui';

describe('NxDemoSharedUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NxDemoSharedUi />);
    expect(baseElement).toBeTruthy();
  });
});
