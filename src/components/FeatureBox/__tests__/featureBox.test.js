import React from 'react';
import { shallow } from 'enzyme';
import FeatureBox, {TitleLogo} from '../index';

describe('FeatureBox', () => {
  const testProps = {
    background: 'src/img'
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FeatureBox {...testProps} />);
  });
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('contains title', () => {
    wrapper.setProps({ title: 'test title inner' });
    expect(wrapper.html()).toContain('test title inner');
  });

  it('renders logo appropiately', () => {
    expect(wrapper.find(TitleLogo)).toHaveLength(0);
    wrapper.setProps({ withLogo: true });
    expect(wrapper.find(TitleLogo)).toHaveLength(1);
  });
});
