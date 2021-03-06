import isArray from 'lodash/isArray'

export default function isValidType(type: any, allowArray?: boolean): boolean {
	return (
		typeof type === 'string' ||
		typeof type === 'symbol' ||
		(!!allowArray && isArray(type) && type.every(t => isValidType(t, false)))
	)
}
