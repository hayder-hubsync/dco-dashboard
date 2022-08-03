import React, { useEffect, useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { useSearchParams } from 'react-router-dom';
import { Info } from '../../components';
import { References } from '../../services/references';
import { Card, Container, Content, Title, Wrapper } from './Styles';

export const Home = (props: any) => {
  const [data, setData] = useState<any>({});
  let [searchParams] = useSearchParams();

  const { testSession, dco, athlete, discipline, sport, ar, uar, dcor, aar, samples, psrs } = data;

  const getTestSessionById = async () => {
    const tsId = searchParams.get('tsId');
    if (tsId) {
      const results = await References.getTestSession(tsId);
      console.log('DATA: ', results);
      setData(results);
    }
  };

  useEffect(() => {
    getTestSessionById();
  }, []);

  return (
    <Container>
      <Grid fluid>
        <Row center="md">
          {testSession && (
            <Col xs={12} md={8}>
              <Row>
                <Col xs={12} sm={6} lg={4}>
                  <Card>
                    <Title title={testSession?.funcName}>Test Session</Title>
                    <Content>
                      <Info name="DCO" value={`${dco?.fName} ${dco?.lName}`} />
                      <Info name="Email" value={`${athlete?.email}`} />
                      <Info name="Status" label="true" value={`${testSession?.status}`} />
                      <Info name="Type" label="true" value={testSession?.tsType} />
                      <Info name="Can submit?" value={testSession?.canSubmit?.toString()} />
                      <Info name="Discipline" value={`${discipline?.name}`} />
                      <Info name="Sport" value={`${sport?.name}`} />
                      <Info name="Window end" value={`${testSession?.wEnd?.substring(0, 10)}`} />
                      <Info
                        name="Window start"
                        value={`${testSession?.wStart?.substring(0, 10)}`}
                      />
                      <Info name="AR status" label="true" value={ar?.status} />
                      {uar && <Info name="UAR status" label="true" value={`${uar?.status}`} />}
                      <Info name="DCOR status" label="true" value={`${dcor?.status}`} />
                      <Info name="AAR status" label="true" value={`${aar?.status}`} />
                    </Content>
                  </Card>
                </Col>

                {samples?.length && (
                  <Col xs={12} sm={6} lg={4}>
                    <Card>
                      <Title>DCOR Samples</Title>
                      <Content>
                        {samples.map((item: any) => {
                          return (
                            <Wrapper key={item?.sample?.code?.toString()}>
                              <Info name="Code" value={item?.sample?.code?.toString()} />
                              <Info name="Status" label="true" value={item?.sample?.status} />
                              <Info
                                name="Manifest Status"
                                label="true"
                                value={item?.sample?.status}
                              />
                            </Wrapper>
                          );
                        })}
                      </Content>
                    </Card>
                  </Col>
                )}

                <Col xs={12} sm={6} lg={4}>
                  <Card>
                    <Title>Post-Supplemental Report (PSR)</Title>
                    <Content>
                      {psrs.map((item: any) => {
                        return (
                          <Wrapper key={item?.psr?.createdOn}>
                            <Info
                              name="Created on"
                              value={item?.psr?.createdOn?.substring(0, 10)}
                            />
                            <Info name="Status" label="true" value={item?.psr?.status} />
                          </Wrapper>
                        );
                      })}
                    </Content>
                  </Card>
                </Col>
              </Row>
            </Col>
          )}
        </Row>
      </Grid>
    </Container>
  );
};
