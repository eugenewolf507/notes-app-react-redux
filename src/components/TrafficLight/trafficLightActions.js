export const Type = { CHANGE: 'CHANGE' };

export const light = color => ({
  type: Type.CHANGE,
  payload: color,
});
