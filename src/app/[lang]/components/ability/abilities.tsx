'use client'
import { Abilities } from '../../../../utils/array';
import { IconAbility } from './IconAbility';
import { useState } from 'react';
import DescriptionAbility from './descriptionAbility';
import { usePathname } from 'next/navigation';

export default function Ability() {
  const pathname = usePathname()
  const [title, setTitle] = useState(pathname == '/pt' ? 'Habilidade' : 'Ability');
  const [description, setDescription] = useState(
    pathname == '/pt' ?
      'Clique em alguma habilidade acima para ver sua descrição' :
      'Click on some skill above to see its description'
  );



  function handleClick(
    title: string,
    description: string,
  ): void {
    setTitle(title);
    setDescription(description);
  }


  return (
    <div className='container mx-auto text-center mt-16'>
        <h1 className='font-bold text-neutral-50 text-2xl mb-4'>{pathname == '/pt' ? 'Habilidades' : 'Abilities'}</h1>
        <div className='flex justify-center flex-wrap m-5'>
          {Abilities.map(Ability => (
            <IconAbility
              key={Ability.id}
              onClick={() =>
                handleClick(Ability.title, pathname == '/pt' ? Ability.descriptionpt : Ability.descriptionen)
              }
              src={Ability.src}
            />
          ))}
        </div>
        <DescriptionAbility title={title} description={description} />
    </div>
  )
}