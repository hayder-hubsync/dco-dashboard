import React, { useState } from 'react';
import { Info } from '../../components';
import { References } from '../../services/references';
import { Indicator, IndicatorCount, IndicatorText, StyledCard, Title, Wrapper } from './Styles';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { Constants } from '../../utils';

export const Home = () => {
  const [data, setData] = useState<any>({});
  const [value, setValue] = useState<any>();
  const [type, setType] = useState<any>({});

  const {
    testSession,
    dco,
    athlete,
    discipline,
    sport,
    ar,
    uar,
    dcor,
    aar,
    samples,
    psrs,
    submitted
  } = data;

  const getTestSessionById = async () => {
    if (value) {
      const results = await References.getTestSession(value, type);
      console.log('DATA:', results);
      setData(results);
    } else {
      alert('Add a value into the field');
    }
  };

  return (
    <Container className="mt-3">
      <Row className="justify-content-md-center">
        <Col xs lg="3" className="mb-1">
          <Form.Control
            onChange={(event: any) => setValue(event?.target?.value)}
            type="email"
            placeholder="Enter test session or sample code"
          />
        </Col>

        <Col md="auto" className="mb-1">
          <Form.Select onChange={(event: any) => setType(event?.target?.value)}>
            <option value="id">By Id</option>
            <option value="sample">By sample code</option>
          </Form.Select>
        </Col>

        <Col xs lg="2" className="mb-1">
          <Button variant="primary" type="submit" onClick={getTestSessionById}>
            Submit
          </Button>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={2}>
          <Indicator color={Constants.Colors.success}>
            <IndicatorCount>{submitted?.length}</IndicatorCount>
            <IndicatorText>Submited</IndicatorText>
          </Indicator>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col xs={12} sm={6} lg={4}>
          <StyledCard>
            <Title title={testSession?.funcName}>Test Session</Title>
            <StyledCard.Body>
              {testSession && (
                <>
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
                  <Info name="Window start" value={`${testSession?.wStart?.substring(0, 10)}`} />
                  <Info name="AR status" copy={testSession?.arId} label="true" value={ar?.status} />
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
                </>
              )}
            </StyledCard.Body>
          </StyledCard>
        </Col>

        <Col xs={12} sm={6} lg={4}>
          <StyledCard>
            <Title title={testSession?.funcName}>DCOR Samples</Title>
            <StyledCard.Body>
              <>
                {samples?.map((item: any) => {
                  return (
                    <Wrapper key={item?.sample?.code?.toString()}>
                      <Info name="Type" value={item?.sample?.type?.toString()} />
                      <Info
                        name="Code"
                        copy={item?.sample?.code}
                        value={item?.sample?.code?.toString()}
                      />
                      <Info name="Status" label="true" value={item?.sample?.status} />
                      {!!item?.sample?.manifestId && (
                        <Info
                          name="Manifest Status"
                          copy={item?.sample?.manifestId}
                          label="true"
                          value={item?.manifest?.status}
                        />
                      )}
                    </Wrapper>
                  );
                })}
              </>
            </StyledCard.Body>
          </StyledCard>
        </Col>

        <Col xs={12} sm={6} lg={4}>
          <StyledCard>
            <Title title={testSession?.funcName}>Post-Supplemental Report (PSR)</Title>
            <StyledCard.Body>
              <>
                {psrs?.map((item: any) => {
                  return (
                    <Wrapper key={item?.psr?.createdOn}>
                      <Info name="Created on" value={item?.psr?.createdOn?.substring(0, 10)} />
                      <Info name="Status" label="true" value={item?.psr?.status} />
                    </Wrapper>
                  );
                })}
              </>
            </StyledCard.Body>
          </StyledCard>
        </Col>
      </Row>
    </Container>
  );
};
