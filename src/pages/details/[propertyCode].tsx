import React, { useRef, useState, useEffect } from 'react';
import LayoutDetails from '@/layout/LayoutDetails';
import localStyle from '@/components/details/Details.module.scss';
import { DetailsFloor } from '@/types/Places.types';
import Floor from '@/components/details/floor/Floor';
import Contact from '@/components/details/contact/Contact';
import BaseLoading from '@/components/common/base/loading/BaseLoading';
import { useRouter } from 'next/router';
import { backend } from '@/api/backend';

export default function Details() {
  const [floor, setFloor] = useState<DetailsFloor | null>(null);
  const { apiDetailsFloor } = backend();
  const router = useRouter();
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      const fetchData = async () => {
        if (router.query.propertyCode) {
          try {
            const res = await apiDetailsFloor(
              router.query.propertyCode as string,
            );
            setFloor(res);
          } catch (error) {
            router.push('/');
          }
        }
      };
      fetchData();
    }
  }, [router.query.propertyCode]);

  return (
    <>
      {floor ? (
        <LayoutDetails>
          <div className={localStyle.mainContainer}>
            <div className={localStyle.mainContent}>
              <Floor floor={floor} className={localStyle.containerFloor} />
              <div className={localStyle.containerContact}>
                <Contact className="" />
              </div>
            </div>
          </div>
        </LayoutDetails>
      ) : (
        <BaseLoading loading={true}></BaseLoading>
      )}
    </>
  );
}
