import React, { useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Info } from '../../components';
import { References } from '../../services/references';
import { Card, Container, Content, Input, SendButton, Title, Wrapper } from './Styles';
import Select from 'react-select';

const options = [
  { value: 'id', label: 'By Id' }
  // { value: 'sample', label: 'By sample' }
];

export const Home = (props: any) => {
  const [data, setData] = useState<any>({});
  const [value, setValue] = useState<any>();

  const { testSession, dco, athlete, discipline, sport, ar, uar, dcor, aar, samples, psrs } = data;

  const getTestSessionById = async () => {
    if (value) {
      const results = await References.getTestSession(value);
      console.log('DATA: ', results);
      setData(results);
    } else {
      alert('Add a value into the field');
    }
  };

  return (
    <Container>
      <Grid fluid>
        <Row center="md">
          <Col xs={10} md={2}>
            <Input onChange={(event) => setValue(event?.target?.value)} />
          </Col>
          <Col xs={10} md={2}>
            <Select defaultValue={{ value: 'id', label: 'By Id' }} options={options} />
          </Col>
          <Col xs={10} md={1}>
            <SendButton onClick={getTestSessionById}>Send</SendButton>
          </Col>
        </Row>

        <br />

        <Row center="md">
          {testSession && (
            <Col xs={12} md={8}>
              <Row>
                <Col xs={12} sm={6} lg={4}>
                  <Card>
                    <Title title={testSession?.funcName}>Test Session</Title>
                    <Content>
                      <Info
                        name="DCO"
                        copy={testSession?.lockedBy}
                        value={`${dco?.fName} ${dco?.lName}`}
                      />
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
                      <Info
                        name="AR status"
                        copy={testSession?.arId}
                        label="true"
                        value={ar?.status}
                      />
                      {uar && (
                        <Info
                          name="UAR status"
                          copy={testSession?.uarId}
                          label="true"
                          value={`${uar?.status}`}
                        />
                      )}
                      <Info
                        name="DCOR status"
                        copy={testSession?.dcorId}
                        label="true"
                        value={`${dcor?.status}`}
                      />

                      <Info
                        name="AAR status"
                        copy={testSession?.aarId}
                        label="true"
                        value={`${aar?.status}`}
                      />
                    </Content>
                  </Card>
                </Col>

                {!!samples?.length && (
                  <Col xs={12} sm={6} lg={4}>
                    <Card>
                      <Title>DCOR Samples</Title>
                      <Content>
                        {samples.map((item: any) => {
                          return (
                            <Wrapper key={item?.sample?.code?.toString()}>
                              <Info
                                name="Code"
                                copy={item?.sample?.code}
                                value={item?.sample?.code?.toString()}
                              />
                              <Info name="Status" label="true" value={item?.sample?.status} />
                              <Info
                                name="Manifest Status"
                                copy={item?.sample?.manifestId}
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

                {!!psrs?.length && (
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
                )}
              </Row>
            </Col>
          )}
        </Row>
      </Grid>
    </Container>
  );
};
