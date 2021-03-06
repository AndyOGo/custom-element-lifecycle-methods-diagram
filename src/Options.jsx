import React from 'react';
import PropTypes from 'prop-types';

import './Options.less';

import T from './i18n';
import { supportedCustomElementVersions, isReactVersion } from './propTypes';
import { supportedLocales } from './i18n/i18n';
import { countryCodeToFlagEmoji } from './shared/utils';

const SelectOption = ({
  onChange,
  options,
  value,
  ...otherProps
}) => (
  <select id="language" onChange={onChange} value={value} {...otherProps}>
    {options.map(option => (
      <option key={option.value || option} value={option.value || option}>
        {option.label || option}
      </option>
    ))}
  </select>
);

SelectOption.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ])).isRequired,
  value: PropTypes.string,
};

const Options = ({
  advanced,
  locale,
  reactVersion,
  toggleAdvanced,
  toggleLocale,
  toggleReactVersion,
}) => (
  <fieldset className="Options">
    <legend>
      <T>
        Options
      </T>
    </legend>
    <div>
      <input type="checkbox" id="showAdvanced" checked={advanced} onChange={toggleAdvanced} />
      <label htmlFor="showAdvanced">
        <T>
          Show custom reactions
        </T>
      </label>
    </div>
    <div>
      <label htmlFor="reactVersion">
        <T>
          Custom Element version
        </T>
      </label>
      <SelectOption
        id="reactVersion"
        options={supportedCustomElementVersions.map(value => ({
          label: value,
          value,
        }))}
        onChange={toggleReactVersion}
        value={reactVersion}
      />
    </div>
    <div>
      <label htmlFor="language">
        <T>
          Language
        </T>
      </label>
      <SelectOption
        id="language"
        options={supportedLocales.map(value => ({
          label: `${countryCodeToFlagEmoji(value)} ${value}`,
          value,
        }))}
        onChange={toggleLocale}
        value={locale}
      />
    </div>
  </fieldset>
);

Options.propTypes = {
  advanced: PropTypes.bool,
  locale: PropTypes.string,
  reactVersion: isReactVersion.isRequired,
  toggleAdvanced: PropTypes.func.isRequired,
  toggleLocale: PropTypes.func.isRequired,
  toggleReactVersion: PropTypes.func.isRequired,
};

export default Options;
