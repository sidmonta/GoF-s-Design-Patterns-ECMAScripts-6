import {Rectangle} from 'Rectangle';

export class RectangleClassAdapter extends Rectangle	{

	define(x0, y0, x1, y1, color)	{
		super.setShape(x0, y0, (x1 - x0), (y1 - y0), color);
	}

	getSurface()	{
		return super.getArea();
	}

	getCoordinates()	{
		return [super.getOriginX(), super.getOriginY(), super.getOppositeCornerX(), super.getOppositeCornerY()];
	}

	set name(id)	{
		this.name = id;
	}

	get name()	{
		return this.name;
	}

}