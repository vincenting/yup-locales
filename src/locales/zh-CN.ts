/*eslint-disable no-template-curly-in-string*/

import { FormatErrorParams, LocaleObject } from 'yup';
import printValue from '../util/printValue';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: '${path} 无效',
  required: '${path} 是必填的字段',
  oneOf: '${path} 必须是以下值之一：${values}',
  notOneOf: '${path} 不能是以下值之一：${values}',
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} 必须是\`${type} 类型, ` +
      `但最终值是：\`${printValue(value, true)}` +
      (isCast ? ` (从值\`${printValue(originalValue, true)}\`').` : '.');

    if (value === null) {
      msg +=
        `\n 如果尝试将 "null" 视作为空值，请确保在 Schema 中将其标记为` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} 必须完全是 ${length} 字符',
  min: '${path} 至少输入 ${min} 位',
  max: '${path} 最多输入 ${max} 位',
  matches: '${path} 必须匹配以下正则：“ ${regex}”',
  email: '${path} 必须是有效邮件地址',
  url: '${path} 必须是有效的 URL',
  trim: '${path} 前后不可以包含空格',
  lowercase: '${path} 必须都是小写字母',
  uppercase: '${path} 必须都是大写字母',
};

export const number: LocaleObject['number'] = {
  min: '${path} 必须大于或等于 ${min}',
  max: '${path} 必须小于或等于 ${max}',
  lessThan: '${path} 必须小于 ${less}',
  moreThan: '${path} 必须大于 ${more}',
  positive: '${path} 必须是一个正数',
  negative: '${path} 必须是负数',
  integer: '${path} 必须是一个整数',
};

export const date: LocaleObject['date'] = {
  min: '${path} 字段必须晚于 ${min}',
  max: '${path} 字段必须早于 ${max}',
};

export const boolean: LocaleObject['boolean'] = {};

export const object: LocaleObject['object'] = {
  noUnknown: '${path} 中不能具有对象中未指定的属性',
};

export const array: LocaleObject['array'] = {
  min: '${path} 字段至少包含 ${min} 个元素',
  max: '${path} 字段至多包含 ${max} 个元素',
};
