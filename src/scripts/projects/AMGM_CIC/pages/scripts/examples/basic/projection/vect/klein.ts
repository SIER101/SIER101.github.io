import type { Vector3 } from 'three';
import gnomonic from './gnomonic';
import hemi from './hemi';
import orthographic from './orthographic';

export default function klein(vector: Vector3, alt: boolean = false) {
  if (alt) {
    return gnomonic(vector);
  }
  return orthographic(hemi(vector));
}
