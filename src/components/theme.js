export const light = {
      color: "black",
      backgroundColor: "white",
      padding: "10px",
      fontFamily: "Sans-Serif",
}

export const dark = {
      color: "white",
      backgroundColor: "black",
      padding: "10px",
      fontFamily: "Sans-Serif",
}

const Thems=['light','dark','system'];

export const system = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Sans-Serif",
}

export function Theme(mode='light')
{
      let _mode='light';
      if(Thems.includes(mode))
      {
            _mode = mode;
            var ret;
            switch(_mode)
            {
                  case 'light':
                        ret = light;
                        break;
                  case 'dark':
                        ret = dark;
                        break; 
                  case 'system':
                        ret = system;
                        break;
            }
            return ret;
      }
}