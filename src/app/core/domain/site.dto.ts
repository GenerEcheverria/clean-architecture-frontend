type Position = 'left' | 'center' | 'right';

type Size = 'small' | 'medium' | 'big';

export class Site {

  public name: string;
  public backgroundColor: string;
  public views: number;
  public url: string;
  public header?: Header;

  constructor(
    nameParam: string,
    backgroundColorParam: string,
    viewsParam: number,
    urlParam: string,
    headerParam?: Header
  ) {
    this.name = nameParam;
    this.backgroundColor = backgroundColorParam;
    this.views = viewsParam;
    this.url = urlParam;
    this.header = headerParam;
  }

}

export class Header {

  public title: string;
  public color: string;
  public position: Position;
  public size: Size;
  public hero: boolean;
  public image: string;

  constructor(
    titleParam: string,
    colorParam: string,
    positionParam: Position,
    sizeParam: Size,
    heroParam: boolean,
    imageParam: string
  ) {
    this.title = titleParam;
    this.color = colorParam;
    this.position = positionParam;
    this.size = sizeParam;
    this.hero = heroParam;
    this.image = imageParam;
  }

}

