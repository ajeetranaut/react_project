/**
 * get filtered attribute from attribute name
 * @returns | filteredAttribute as {}
 * @param attributes
 * @param attName
 */
export const filterAttribute = (attributes: any, attName: string) => {
	const filteredAttribute = attributes?.find((item: any) => item?.name === attName);
	return filteredAttribute || {};
};
